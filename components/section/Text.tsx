interface Props {
    children: React.ReactNode

}

export default function Text({ children }: Props) {
    return (

        <div id="bgtext" className={` relative`}>

            <div className="wrapper pt-40 pb-[90vh] md:pb-[100vh] flex flex-col gap-8">

                <h2 className="z-50 pointer-events-none">Technology on your terms</h2>

                <div className="flex flex-col md:flex-row pointer-events-none z-50 gap-8">
                    <p className="flex-1 quicksand">qAI is a cutting-edge hub connecting innovative companies that use AI to solve complex problems in sectors such as medicine, education and diagnostics. <br></br><br></br>We support digital transformation by providing technologies that improve lives, optimize business processes and increase efficiency. <br></br><br></br>Our platform is a space where innovation becomes available to anyone looking for scalable tools. Companies in our hub operate in the spirit of innovation, introducing solutions that make a real difference to industries.  <br></br> <br></br>With on-prem models, data remains under the full control of customers, eliminating the risk of leakage and supporting compliance with regulations such as RODO, allowing companies to deploy AI without privacy concerns.
                    </p>
                    <p className="flex-1 quicksand">Our platform is distinguished by an on-prem approach that guarantees full control over data:
                        <br></br> <br></br>
                        Data security: Data remains in the customer's environment, minimizing the risk of leakage and meeting the requirements of the public sector or banking.
                        <br></br> <br></br>
                        Privacy: No transfer of data to external servers guarantees compliance with the RODO and privacy protection.
                        <br></br> <br></br>Full control: Customers manage their data, eliminating the risk of secondary use.
                        <br></br> <br></br>Scalability: Solutions tailored to an organization's needs support growth and cost optimization.</p>
                </div>
                {children}
            </div>


        </div>

    )
}