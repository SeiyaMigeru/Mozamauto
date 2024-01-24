import FailedModal from "./FailedModal";
import LoadingModal from "./LoadingModal";
import SuccessfullModal from "./SuccessfullModal";

const GeneralModal = ({isVisible, status, closeModal}) => {
    const modals = {
        "success": <SuccessfullModal closeModal={closeModal} />,
        "failed": <FailedModal closeModal={closeModal} />,
        "loading": <LoadingModal />
    }

    return (
        <>
            {isVisible && modals[status]}
        </>
    )

}

export default GeneralModal;