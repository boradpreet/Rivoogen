import React from "react";
import colors from "../../theme/color";

const Tools = () => {
    const tools = [
        {
            name: "Python",
            subtitle: "Automation",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        },
        {
            name: "Selenium",
            subtitle: "Web Testing",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg"
        },
        {
            name: "Node.js",
            subtitle: "Scripts",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        },
        {
            name: "Zapier",
            subtitle: "No-code",
            logo: "https://cdn.worldvectorlogo.com/logos/zapier.svg"
        },
        {
            name: "Make",
            subtitle: "Workflows",
            logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/make-color.png"
        },
        {
            name: "Power Automate",
            subtitle: "Microsoft",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Microsoft_Power_Automate.svg/1024px-Microsoft_Power_Automate.svg.png"
        },
        {
            name: "Google Cloud",
            subtitle: "Cloud",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
        },
        {
            name: "AWS Lambda",
            subtitle: "Serverless",
            logo: "https://cdn.worldvectorlogo.com/logos/aws-lambda.svg"
        },
        {
            name: "Playwright",
            subtitle: "Testing",
            logo: "https://playwright.dev/img/playwright-logo.svg"
        },
    ];

    return (
        <section
            className="px-6 py-16 md:px-16 lg:py-20 lg:px-32 relative overflow-hidden"
            style={{
                background: colors.ghostWhite,
            }}
        >
            {/* Background Pattern */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.02,
                    backgroundImage: `radial-gradient(circle at 2px 2px, ${colors.carbonBlack} 1px, transparent 0)`,
                    backgroundSize: "40px 40px",
                }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Content */}
                    <div>
                        <div
                            style={{
                                display: "inline-block",
                                padding: "6px 16px",
                                background: colors.carbonBlack,
                                color: colors.ghostWhite,
                                borderRadius: "20px",
                                fontSize: "11px",
                                fontWeight: "700",
                                letterSpacing: "1px",
                                marginBottom: "20px",
                            }}
                        >
                            AUTOMATION STACK
                        </div>

                        <h2
                            className="text-4xl md:text-5xl font-bold mb-6"
                            style={{
                                color: colors.carbonBlack,
                                letterSpacing: "-0.02em",
                                lineHeight: "1.2",
                            }}
                        >
                            Powerful Tools Rivoogen
                            <br />
                            Uses for Automation
                        </h2>

                        <p
                            className="text-lg mb-8"
                            style={{
                                color: colors.carbonBlack,
                                opacity: 0.7,
                                lineHeight: "1.7",
                            }}
                        >
                            We leverage industry-leading automation tools and frameworks to streamline
                            your workflows, reduce manual work, and boost productivity across your organization.
                        </p>
                    </div>

                    {/* Right Side - 3x3 Grid of Enhanced Circular Tool Cards */}
                    <div className="grid grid-cols-3 gap-6">
                        {tools.map((tool, idx) => {
                            return (
                                <div
                                    key={idx}
                                    style={{
                                        background: colors.ghostWhite,
                                        border: `3px solid ${colors.alabasterGrey}`,
                                        borderRadius: "50%",
                                        width: "130px",
                                        height: "130px",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        padding: "18px",
                                        boxShadow: "0 6px 16px rgba(28, 28, 28, 0.08)",
                                        cursor: "pointer",
                                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                        margin: "0 auto",
                                        position: "relative",
                                        overflow: "hidden",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "translateY(-8px) scale(1.05)";
                                        e.currentTarget.style.boxShadow = "0 16px 40px rgba(28, 28, 28, 0.15)";
                                        e.currentTarget.style.borderColor = colors.carbonBlack;
                                        e.currentTarget.style.background = `linear-gradient(135deg, ${colors.ghostWhite} 0%, ${colors.softLinen} 100%)`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "translateY(0) scale(1)";
                                        e.currentTarget.style.boxShadow = "0 6px 16px rgba(28, 28, 28, 0.08)";
                                        e.currentTarget.style.borderColor = colors.alabasterGrey;
                                        e.currentTarget.style.background = colors.ghostWhite;
                                    }}
                                >
                                    {/* Decorative ring */}
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: "50%",
                                            left: "50%",
                                            transform: "translate(-50%, -50%)",
                                            width: "100px",
                                            height: "100px",
                                            borderRadius: "50%",
                                            border: `1px solid ${colors.alabasterGrey}`,
                                            opacity: 0.3,
                                        }}
                                    />

                                    {/* Logo Container with background */}
                                    <div
                                        style={{
                                            width: "52px",
                                            height: "52px",
                                            background: `linear-gradient(135deg, ${colors.softLinen} 0%, ${colors.platinum} 100%)`,
                                            borderRadius: "12px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginBottom: "10px",
                                            position: "relative",
                                            zIndex: 1,
                                        }}
                                    >
                                        <img
                                            src={tool.logo}
                                            alt={tool.name}
                                            style={{
                                                width: "36px",
                                                height: "36px",
                                                objectFit: "contain",
                                            }}
                                            onError={(e) => {
                                                e.target.style.display = "none";
                                            }}
                                        />
                                    </div>

                                    {/* Tool Name */}
                                    <div
                                        style={{
                                            fontWeight: "800",
                                            fontSize: "13px",
                                            color: colors.carbonBlack,
                                            textAlign: "center",
                                            marginBottom: "3px",
                                            lineHeight: "1.2",
                                            position: "relative",
                                            zIndex: 1,
                                        }}
                                    >
                                        {tool.name}
                                    </div>

                                    {/* Subtitle */}
                                    <div
                                        style={{
                                            fontSize: "10px",
                                            color: colors.carbonBlack,
                                            opacity: 0.6,
                                            fontWeight: "600",
                                            textAlign: "center",
                                            position: "relative",
                                            zIndex: 1,
                                        }}
                                    >
                                        {tool.subtitle}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tools;