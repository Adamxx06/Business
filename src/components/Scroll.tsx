import { useState, useEffect } from "react";

const Scroll = () => {
    const [showBtn, setShowBtn] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowBtn(true);
            } else {
                setShowBtn(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <>
            {showBtn && (
                <button
                    onClick={scrollToTop}
                    className="btn btn-seccondary"
                    style={{
                        position: "fixed",
                        width: "50px",
                        height: "50px",
                        bottom: "30px",
                        right: "5px",
                        color: "white",
                        borderRadius: "50%",
                        backgroundColor:"orangered"
                    }}
                >
                    ↑
                </button>
            )}
            ;
        </>
    );
}
export default Scroll;
