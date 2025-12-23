import { EMAIL_LINK, GENERAL_INFO } from '@/lib/data';

const Footer = async () => {
    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Looking to build something amazing? Let’s work together!</p>
                <a
                    href={EMAIL_LINK}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    {GENERAL_INFO.email}
                </a>

            
            </div>
        </footer>
    );
};

export default Footer;
