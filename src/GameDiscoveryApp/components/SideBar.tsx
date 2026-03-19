import { Button, Heading, Link, VStack } from "@chakra-ui/react";
import { FaCalendarAlt, FaStar } from "react-icons/fa";
import { TbPlayerTrackNextFilled } from "react-icons/tb";

function SideBar() {
  return (
    <VStack align="flex-start" gap="5" marginTop="12">
        <Button variant="ghost">Home</Button>
        <Button variant="ghost">Reviews</Button>
        <Heading size="md">New Releases</Heading>
        <Link><Button size="sm"><FaStar /></Button><Heading size="sm">Last 30 Days</Heading></Link>
        <Link><Button size="sm"><FaCalendarAlt /></Button><Heading size="sm">This Week</Heading></Link>
        <Link><Button size="sm"><TbPlayerTrackNextFilled /></Button><Heading size="sm">Next Week</Heading></Link>
    </VStack>  
  )
}

export default SideBar;