import {
  Link as ChakraLink,
  Icon,
  Text,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

export default function NavLink({ icon, children, href,  ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="stretch" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text m="0" ml="4" fontWeight="medium" align="center">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
