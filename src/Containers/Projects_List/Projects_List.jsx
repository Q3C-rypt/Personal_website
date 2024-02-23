import React, { useState } from 'react'
import './projects_list.css';
import { color, motion } from 'framer-motion';
import {Link} from 'react-router-dom';

const Projects_List = () => {
  const [showcard, setShowCard] = useState(false)
  return (
    <div>
      <div 
        style = {{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            background: "black"
        }}
    >
        <motion.div
            style = {{
                background: "white",
                padding: "3rem 2rem",
                borderRadius: "8px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"
            }}
            whileHover={{
                scale: 1.2
            }}
            transition={{
                layout: {
                    duration: 1,
                    type: "spring"
                }
            }}
            layout
            onClick={() => setShowCard(!showcard)}
        >
            <motion.h3>Quantum Key Distribution Algorithm</motion.h3>
            {showcard && 
                <motion.p
                    style = {{width: "600px"}}
                    initial = {{opacity:0}}
                    animate = {{opacity:1}}
                >
                    {/* <p><Link to = "/home">More</Link></p> */}
                </motion.p>
            }

        </motion.div>
    </div>
    </div>
  )
}

export default Projects_List