import "./ClientShowcase.css";
import { clients } from "../../data/fallbackData.js";
import LogoCard from "./LogoCard";
import { useEffect, useRef } from "react";

export default function ClientShowcase() {
    const logoRefs = useRef([]);
    const pathRef = useRef(null);
    const radius = 330;

    const total = clients.length;

    const startAngle = -160;

    const endAngle = 160;

    const left = 790;
    const right = 800;

    const top = 1090;

    const rx = 680;
    const ry = 450;

    useEffect(() => {

        const path = pathRef.current;

        if (!path) return;

        const pathLength = path.getTotalLength();

        let animationFrame;

        let offset = 0;

        const speed = 0.8;

        function animate() {

            offset += speed;

            logoRefs.current.forEach((logo, index) => {

                if (!logo) return;

                const spacing = pathLength / total;

                const distance =
                    (offset + index * spacing) % pathLength;

                const point =
                    path.getPointAtLength(distance);

                const nextPoint =
                    path.getPointAtLength(
                        (distance + 2) % pathLength
                    );

                const angle =
                    Math.atan2(
                        nextPoint.y - point.y,
                        nextPoint.x - point.x
                    );

                const rotation =
                    angle * (180 / Math.PI);

                logo.style.left = `${point.x}px`;
                logo.style.top = `${point.y}px`;

                
logo.style.transform =
    "translate(-50%, -50%)";
            });

            animationFrame =
                requestAnimationFrame(animate);

        }

        animationFrame =
            requestAnimationFrame(animate);

        return () => {

            cancelAnimationFrame(animationFrame);

        };

    }, [total]);

    return (
        <section className="clients-section">

            <div className="clients-header">

                <p className="clients-subtitle">
                    Trusted by
                </p>

                <h2 className="clients-title">
                    OUR CLIENTS
                </h2>

            </div>

            {/* M 80 500
                        A 420 220 0 1 1 1000 260
                        L 820 930
                        L 180 930
                        Z */}

            <div className="clients-circle">

                <svg
                    className="clients-path"
                    viewBox="0 0 1000 600"
                    preserveAspectRatio="none"
                >
                    <path
                        ref={pathRef}
                        id="clientArc"
                        d={`
                        M ${left} ${top}
                        A ${rx} ${ry} 0 1 1 ${right} ${top}
                        L ${right} 840
                        L ${left} 840
                        Z
                        `}
                        fill="none"
                        stroke="transparent"
                    />
                </svg>

                {clients.map((client, index) => {

                    const angle =
                        startAngle +
                        (index * (endAngle - startAngle)) /
                        (total - 1);

                    const radians = angle * (Math.PI / 180);

                    const x = radius * Math.cos(radians);

                    const y = radius * Math.sin(radians);

                    return (

                        <LogoCard
                            key={client.id}
                            ref={(el) => (logoRefs.current[index] = el)}
                            client={client}
                        />

                    );

                })}
                <div className="clients-fade"></div>
            </div>
        </section>
    );
}