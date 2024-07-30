import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ActionModal from 'src/components/common/ActionModal';
import Alert from 'src/components/common/Alert';

function SystemContainer() {
	return (
		<>
			<ToastContainer />
			<ActionModal />
			<Alert />
		</>
	);
}
export default SystemContainer;
