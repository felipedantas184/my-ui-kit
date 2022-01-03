import { id } from '../../firebase/initFirebase'
import { collection, addDoc } from 'firebase/firestore'
import fireDB from '../../firebase/initFirebase'

const WriteToCloudFirestore = () => {
  async function sendData() {
		try {
			await addDoc(collection(fireDB, "users") , {name: 'Felipe' , age: 25})
						.then(alert('Data was successfully sent to cloud firestore!'))
		} catch (error) {
				console.log(error)
				alert(error)
		}
	}

	return ( 
		<>
			<button onClick={sendData}>Send Data To Cloud Firestore</button>
		</>
	);
}
 
export default WriteToCloudFirestore;