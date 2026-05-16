

import Footer from "@/components/Main/Footer/Footer"
import Header from "@/components/Main/Header/Header"





const LayoutElement = ({ children }: {
    children: React.ReactNode;
}) => {
    return (
        // <MainContext.Provider value={{}}>
        <>
            <div>
                <Header />
            </div>
            <div>
                {children}
            </div>
            <Footer />
        </>
        // </MainContext.Provider>
    )
}

export default LayoutElement
