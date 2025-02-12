// import React from 'react'
import { Herr_Von_Muellerhoff } from "next/font/google"
import Link from "next/link"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const socials = [
    { name: <FaGithub/>, path: ""},
    { name: <FaLinkedin/>, path: ""},
    { name: <FaTwitter/>, path: ""},
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((social,index) => {
            return (
                <Link key={index} href = {social.path} className={iconStyles}>
                    {social.name}
                </Link>
            )
      })}
    </div>
  )
}

export default Social
