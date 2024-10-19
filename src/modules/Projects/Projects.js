import "./styles/Projects.scss"
import { useState, useEffect, useRef} from "react"

const Projects = () => {
    const [isVisible, setIsVisible] = useState([]); // State to track visibility of multiple elements
    const elementsRef = useRef([]); // Ref to store elements

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = elementsRef.current.indexOf(entry.target); // Get the index of the observed element
                    if (index !== -1) {
                        setIsVisible((prev) => {
                            const updatedVisibility = [...prev]; // Create a copy of the previous visibility state
                            updatedVisibility[index] = entry.isIntersecting; // Update the visibility of the current element
                            return updatedVisibility; // Return the updated state
                        });
                    }
                });
            },
            {
                threshold: 0.1, // Adjust threshold for visibility sensitivity
            }
        );

        // Observe each element in the elementsRef
        elementsRef.current.forEach((element) => {
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            // Clean up observers on unmount
            elementsRef.current.forEach((element) => {
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, []);

    return <div className="projects-page">
        <div className="sticky-header">
            <a href="/">SUBOTIX</a>
        </div>
        <div className="project-section hero">
            <div ref={(el) => elementsRef.current[0] = el} style={{position: "absolute", width: "5px", height: "5px", top: "30%"}}></div>
            <h3 className={isVisible[0] ? "" : "hidden"}>Sawy the Camel</h3>
            <p className={isVisible[0] ? "" : "hidden"}>A 2 meter tall, 2 meter long 3D printed camel sculpture</p>
        </div>
        <div className="project-section bull">
            <div ref={(el) => elementsRef.current[1] = el} style={{position: "absolute", width: "5px", height: "5px", top: "30%"}}></div>
            <h3 className={isVisible[1] ? "" : "hidden"}>Barbacoa</h3>
            <p className={isVisible[1] ? "" : "hidden"}>Horns spanning 2 meters, a longhorn bull sculpture sporting the colors of the American flag</p>
        </div>
        <div className="project-section sawysawy">
            <div ref={(el) => elementsRef.current[2] = el} style={{position: "absolute", width: "5px", height: "5px", top: "30%"}}></div>
            <h3 className={isVisible[2] ? "" : "hidden"}>Burger Assembler</h3>
            <p className={isVisible[2] ? "" : "hidden"}>Full display of the capabilities of the Sawy-Sawy microcontroller</p>
        </div>
    </div>
}

export default Projects;