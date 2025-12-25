const ResumeModal = ({ resumeModalId }) => {
    return (
        <dialog id={resumeModalId} className="modal">
            <div className="modal-box w-8/12 max-w-4xl h-[84vh] p-0">

                <iframe 
                    src="/TzeYiTiong_Resume.pdf" 
                    className="w-full h-full border-0 rounded-lg"
                    title="Resume"
                />
            </div>

            <form method="dialog" className="modal-backdrop"> {/* Backdrop allow us to close by clicking anywhere outside the modal */}
                <button>close</button>
            </form>
        </dialog>
    )
}

export default ResumeModal;
