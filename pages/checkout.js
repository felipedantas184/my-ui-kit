import Head from 'next/head'
import dynamic from 'next/dynamic';
import getCommerce from '../utils/commerce'
import ProductCard from '../components/ProductCard';
import { Container, GridWrapper, Heading, OneQuarterWrapper, RemoveButton, Subtitle, SubtotalButton, SubtotalCard, SubtotalValue, TableCell, TableLine, TableWrapper, TextWrapper, ThreeQuartersWrapper, TitleText } from '../components/UsefulComponents';
import Layout from '../components/Layout';
import { useContext, useEffect, useState } from 'react';
import { Store } from '../components/Store';
import { FiX } from 'react-icons/fi'
import Router from 'next/router';
import { CART_RETRIEVE_SUCCESS } from '../utils/constants';
import Link from 'next/link';

const dev = process.env.NODE_ENV === 'development';
function Checkout(props) {

  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const [errors, setErrors] = useState([]);
  const [checkoutToken, setCheckoutToken] = useState({});

  useEffect(() => {
    if (!cart.loading) {
      generateCheckoutToken();
    }
  }, [cart.loading]);

  const generateCheckoutToken = async () => {
    if (cart.data.line_items.length) {
      const commerce = getCommerce(props.commercePublicKey);
      const token = await commerce.checkout.generateToken(cart.data.id, {
        type: 'cart',
      });
      setCheckoutToken(token);
      fetchShippingCountries(token.id);
    } else {
      Router.push('/cart');
    }
  };


  // Fetching //
  const fetchShippingCountries = async (checkoutTokenId) => {
    const commerce = getCommerce(props.commercePublicKey);
    const countries = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );
    setShippingCountries(countries.countries);
  };

  const fetchSubdivisions = async (countryCode) => {
    const commerce = getCommerce(props.commercePublicKey);
    const subdivisions = await commerce.services.localeListSubdivisions(
      countryCode
    );
    setShippingSubdivisions(subdivisions.subdivisions);
  };

  const fetchShippingOptions = async (
    checkoutTokenId,
    country,
    stateProvince = null
  ) => {
    const commerce = getCommerce(props.commercePublicKey);
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      {
        country: country,
        region: stateProvince,
      }
    );
    setShippingOptions(options);
    const shippingOption = options[0] ? options[0].id : null;
    setShippingOption(shippingOption);
  };
  // Fetching //


  // Handle Changes //
  const handleShippingCountryChange = (e) => {
    const currentValue = e.target.value;
    setShippingCountry(e.target.value);
    fetchSubdivisions(currentValue);
  };
  const handleSubdivisionChange = (e) => {
    const currentValue = e.target.value;
    setShippingStateProvince(currentValue);
    fetchShippingOptions(checkoutToken.id, shippingCountry, currentValue);
  };
  const handleShippingOptionChange = (e) => {
    const currentValue = e.target.value;
    setShippingOption(currentValue);
    console.log(currentValue);
  };
  // Handle Changes //
  

  // Customer details
  const [firstName, setFirstName] = useState(dev ? 'Jane' : '');
  const [lastName, setLastName] = useState(dev ? 'Doe' : '');
  const [email, setEmail] = useState(dev ? 'janedoe@email.com' : '');

  // Shipping details
  const [shippingName, setShippingName] = useState(dev ? 'Jane Doe' : '');
  const [shippingStreet, setShippingStreet] = useState(
    dev ? '123 Fake St' : ''
  );
  const [shippingPostalZipCode, setShippingPostalZipCode] = useState(
    dev ? '90089' : ''
  );
  const [shippingCity, setShippingCity] = useState(dev ? 'Los Angeles' : '');
  const [shippingStateProvince, setShippingStateProvince] = useState(
    dev ? 'AR' : ''
  );
  const [shippingCountry, setShippingCountry] = useState(dev ? '' : '');
  const [shippingOption, setShippingOption] = useState({});
  // Payment details
  const [cardNum, setCardNum] = useState(dev ? '4242 4242 4242 4242' : '');
  const [expMonth, setExpMonth] = useState(dev ? '11' : '');
  const [expYear, setExpYear] = useState(dev ? '2023' : '');
  const [cvv, setCvv] = useState(dev ? '123' : '');
  const [billingPostalZipcode, setBillingPostalZipcode] = useState(
    dev ? '90089' : ''
  );
  // Shipping and fulfillment data
  const [shippingCountries, setShippingCountries] = useState({});
  const [shippingSubdivisions, setShippingSubdivisions] = useState({});
  const [shippingOptions, setShippingOptions] = useState([]);


  //Handle Order//
  const handleCaptureCheckout = async () => {
    const orderData = {
      line_items: checkoutToken.live.line_items,
      customer: {
        firstname: firstName,
        lastname: lastName,
        email: email,
      },
      shipping: {
        name: shippingName,
        street: shippingStreet,
        town_city: shippingCity,
        county_state: shippingStateProvince,
        postal_zip_code: shippingPostalZipCode,
        country: shippingCountry,
      },
      fulfillment: {
        shipping_method: shippingOption,
      },
      payment: {
        gateway: 'test_gateway',
        card: {
          number: cardNum,
          expiry_month: expMonth,
          expiry_year: expYear,
          cvc: cvv,
          postal_zip_code: billingPostalZipcode,
        },
      },
    };
    const commerce = getCommerce(props.commercePublicKey);
    try {
      const order = await commerce.checkout.capture(
        checkoutToken.id,
        orderData
      );
      dispatch({ type: ORDER_SET, payload: order });
      localStorage.setItem('order_receipt', JSON.stringify(order));
      await refreshCart();
      Router.push('/confirmation');
    } catch (err) {
      const errList = [err.data.error.message];
      const errs = err.data.error.errors;
      for (const index in errs) {
        errList.push(`${index}: ${errs[index]}`);
      }
      setErrors(errList);
    }
  };
  const refreshCart = async () => {
    const commerce = getCommerce(props.commercePublicKey);
    const newCart = await commerce.cart.refresh();
    dispatch({ type: CART_RETRIEVE_SUCCESS, payload: newCart });
  };
  //Handle Order//

  return (
    <Layout commercePublicKey={props.commercePublicKey} >
			<Head>
				<title>Homepage</title>
			</Head>

				<Container>
	        <GridWrapper>
					{cart.loading ? (
					<TextWrapper>
						<Heading>Checkout</Heading>
						<Subtitle>Estamos carregando o seu checkout! ;-)</Subtitle>
					</TextWrapper>
				) : (
					<>
          <ThreeQuartersWrapper>
              <Heading>Checkout $ </Heading>
              <form>
                <input placeholder='Primeiro Nome' type='text' required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <input placeholder='Sobrenome' type='text' required value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <input placeholder='email' type='email' required value={email} onChange={(e) => setEmail(e.target.value)} />

                <input placeholder='Nome Completo' type='text' required value={shippingName} onChange={(e) => setShippingName(e.target.value)} />
                <input placeholder='Rua' type='text' required value={shippingStreet} onChange={(e) => setShippingStreet(e.target.value)} />
                <input placeholder='Cidade' type='text' required value={shippingCity} onChange={(e) => setShippingCity(e.target.value)} />
                <input placeholder='CEP' type='text' required value={shippingPostalZipCode} onChange={(e) => setShippingPostalZipCode(e.target.value)} />

                <select onChange={handleShippingCountryChange} value={shippingCountry} required > 
                  {Object.keys(shippingCountries).map((index) => (
                    <option value={index} key={index}>
                      {shippingCountries[index]}
                    </option>
                  ))}
                </select>

                <select onChange={handleSubdivisionChange} value={shippingStateProvince} required > 
                  {Object.keys(shippingSubdivisions).map((index) => (
                    <option value={index} key={index}>
                      {shippingSubdivisions[index]}
                    </option>
                  ))}
                </select>

                <select onChange={handleShippingOptionChange} value={shippingOption} required > 
                  {shippingOptions.map((method, index) => (
                    <option value={method.id} key={index}>
                      {`${method.description} - $${method.price.formatted_with_code}`}
                    </option>
                  ))}
                </select>

                <input placeholder='Número do Cartão' type='text' required value={cardNum} onChange={(e) => setCardNum(e.target.value)} />
                <input placeholder='Mês' type='text' required value={expMonth} onChange={(e) => setExpMonth(e.target.value)} />
                <input placeholder='Ano' type='text' required value={expYear} onChange={(e) => setExpYear(e.target.value)} />
                <input placeholder='CVV' type='text' required value={cvv} onChange={(e) => setCvv(e.target.value)} />
                <input placeholder='CEP de Cobrança' type='text' required value={billingPostalZipcode} onChange={(e) => setBillingPostalZipcode(e.target.value)} />
              </form>

              <div style={{display:'flex', flexDirection: 'column', font: '20px 600'}} >
                  <p>{firstName} + {lastName} + {email} <br />
                  {shippingName} + {shippingStreet} + {shippingCity} + {shippingStateProvince} + {shippingPostalZipCode} + {shippingCountry} <br />
                  {cardNum} + {expMonth} + {expYear} + {cvv} + {billingPostalZipcode}
                  </p>
              </div>
          </ThreeQuartersWrapper>
          <OneQuarterWrapper>
						<SubtotalCard>
							<TitleText>Subtotal</TitleText>
							<SubtotalValue>{cart.data.subtotal.formatted_with_symbol}</SubtotalValue>
							<SubtotalButton onClick={handleCaptureCheckout} >Checkout</SubtotalButton>
						</SubtotalCard>
          </OneQuarterWrapper>
					</>
					)
				}
        </GridWrapper>
      </Container>
    </Layout>
  )
}

export default dynamic(() => Promise.resolve(Checkout), {
  ssr: false,
});