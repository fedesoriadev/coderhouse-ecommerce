const Hero = ({ heading = 'Coffee Market', subHeading = ''}) =>
    <header className="bg-dark py-4 mb-4">
        <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
                <h1 className="display-4 fw-bolder">{heading}</h1>
                { subHeading ? <p className="lead fw-normal text-white-50 mb-0">{subHeading}</p> : '' }
            </div>
        </div>
    </header>

export default Hero