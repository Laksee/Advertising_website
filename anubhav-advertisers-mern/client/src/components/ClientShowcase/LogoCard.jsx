import { forwardRef } from "react";

const LogoCard = forwardRef(({ client, style }, ref) => {
    return (
        <div
            ref={ref}
            className="logo-card"
            style={style}
        >
            <img
                src={client.logo}
                alt={client.name}
            />
        </div>
    );
});

LogoCard.displayName = "LogoCard";

export default LogoCard;