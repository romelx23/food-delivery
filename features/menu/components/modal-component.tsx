interface ModalComponentProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

export const ModalComponent = ({
    children,
    isOpen,
    onClose,
}: ModalComponentProps) => {
    return (
        <>
            <div id="crud-modal" aria-hidden="true" className={`overflow-y-auto overflow-x-hidden fixed top-0 left-0 z-50 justify-center items-center w-full inset-0 max-h-full bg-gray-700 bg-opacity-80 hover:cursor-pointer ${ isOpen ? '' : 'hidden' }`}
                onClick={onClose}
            >
            </div>
            <div className={`fixed p-4 w-full max-w-xl max-h-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 ${ isOpen ? '' : 'hidden' }`}>
                <div className="relative rounded-lg shadow bg-gray-200 dark:bg-gray-700">
                    {/* <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    </div> */}
                    <button type="button" className="absolute right-4 top-4 text-gray-200 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={onClose}>
                        <svg className="w-3 h-3 scale-125" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"
                        >
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>

                    {children}
                </div>
            </div>
        </>
    )
}
