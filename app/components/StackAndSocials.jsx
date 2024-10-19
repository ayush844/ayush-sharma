import Image from "next/image";
import square from "../../public/images/stack.png";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import Nextjs from "../../public/icons/nextjs-icon.png"
import Reactjs from "../../public/icons/react.png"
import Nodejs from "../../public/icons/nodejs.png"
import Expressjs from "../../public/icons/express-js-icon.png"
import Mongodb from "../../public/icons/mongo-db.png"
import Mysql from "../../public/icons/mysql.png"
import Firebase from "../../public/icons/firebase.png"
import Tailwind from "../../public/icons/tailwind.png"
import Javascript from "../../public/icons/javascript.png"
import Css from "../../public/icons/css.png"
import Html from "../../public/icons/html.png"
import Git from "../../public/icons/git.png"
import Redux from "../../public/icons/redux.png"


import Github from "../../public/icons/github.png"
import Leetcode from "../../public/icons/leetcode.png"
import Twitter from "../../public/icons/twitter.png"
import LinkedIn from "../../public/icons/linkedin.png"
import { Button } from "@/components/ui/button";


const icons = [
    Nextjs,
    Reactjs,
    Redux,
    Nodejs,
    Expressjs,
    Mongodb,
    Mysql,
    Firebase,
    Tailwind,
    Javascript,
    Css,
    Html,
    Git
]

const socialMedia = [
    {
      id: 1,
      icon: Github,
      name: "Github",
      username: "@ayush844",
      link: "https://github.com/ayush844",
    },
    {
      id: 2,
      icon: Leetcode,
      name: "Leetcode",
      username: "@user3376G",
      link: "https://leetcode.com/u/user3376G/",
    },
    {
      id: 3,
      icon: Twitter,
      name: "X / Twitter",
      username: "@ayushuprush",
      link: "https://x.com/ayushuprush",
    },
    {
        id: 4,
        icon: LinkedIn,
        name: "Linkedin",
        username: "@ayush-sharma-217335250",
        link: "https://www.linkedin.com/in/ayush-sharma-217335250/",
    }
  ];

const StackAndSocials = () => {
    return ( 
    <div className="grid gird-cols-1 lg:grid-cols-3 gap-4 mt-10">
        <div className="w-full relative col-span-1">
            <Image
            src={square}
            alt="square"
            className="w-full h-full object-cover rounded-2xl"
            priority
            />
        </div>
        <div className="flex flex-col w-full col-span-1 lg:col-span-2 gap-4">
            <Card className="bg-gray-100 border-none">

                <CardHeader>
                    <CardTitle>My Tech Stack</CardTitle>
                    <CardDescription>Check out the tools i use daily</CardDescription>
                </CardHeader>

                <CardContent className="flex flex-wrap gap-4">
                    {icons.map((item, index) => (
                        <Image key={index} src={item} alt="Icon" className="w-16 h-16 md:w-28 md:h-28" />
                    ))}
                </CardContent>

            </Card>

        <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4">
          {socialMedia.map((item) => (
            <Card
              key={item.id}
              className="flex p-4 flex-col justify-center items-center bg-gray-100 border-none text-center h-full"
            >
              <Image src={item.icon} alt="Icon" className="w-16 h-16" />
              <h1 className="text-2xl font-medium pt-3">{item.name}</h1>
              <p className="text-muted-foreground">{item.username}</p>
              <Button className="mt-4" size="sm" asChild>
                <a href={item.link} target="_blank">Visit</a>
              </Button>
            </Card>
          ))}
        </div>
        </div>
    </div> 
    );
}
 
export default StackAndSocials;