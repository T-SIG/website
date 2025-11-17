import {
  ArrowRight,
  ArrowRightIcon,
  Book,
  Menu,
  Sunset,
  Trees,
  Zap,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    img?: {
      src: string;
      alt: string;
    };
    title: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

const Navbar1 = ({
  logo = {
    url: "/",
    // src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    // alt: "logo",
    title: "TSIG",
  },
  menu = [
    { title: "Home", url: "#" },
    {
      title: "Pricing",
      url: "#",
    },
    {
      title: "Blog",
      url: "#",
    },
  ],
}: Navbar1Props) => {
  return (
    <section className="py-2">
      <div className="w-full px-4">
        {/* Desktop Menu */}
        <nav className="hidden items-center justify-between lg:flex">
          <div className="flex items-center justify-between gap-6  flex-1">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
              {logo?.img ? (
                <img
                  src={logo.img.src}
                  className="max-h-8 dark:invert"
                  alt={logo.img.alt}
                />
              ) : (
                <span className="sm:hidden text-lg font-semibold tracking-tighter">
                  {logo.title}
                </span>
              )}
              <span className="text-2xl font-semibold">{logo.title}</span>
            </a>
            <div className="flex items-center ml-28">
              <NavigationMenu>
                <NavigationMenuList className="gap-2">
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <Button
              variant={"ghost"}
              className="font-mono uppercase text-sm tracking-tight bg-transparent text-foreground border border-foreground rounded-full "
            >
              get it for free
              <ArrowRightIcon />
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
              {logo?.img ? (
                <img
                  src={logo.img.src}
                  className="max-h-8 dark:invert"
                  alt={logo.img.alt}
                />
              ) : (
                <span className="sm:hidden text-lg font-semibold tracking-tighter">
                  {logo.title}
                </span>
              )}
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader className="mb-0 py-2">
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      {logo?.img ? (
                        <img
                          src={logo.img.src}
                          className="max-h-8 dark:invert"
                          alt={logo.img.alt}
                        />
                      ) : (
                        <span className="sm:hidden text-lg font-semibold tracking-tighter">
                          {logo.title}
                        </span>
                      )}
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4 pt-0 mt-0">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                  <Button className="font-mono uppercase text-sm tracking-tight border border-foreground rounded-full ">
                    get it for free
                    <ArrowRightIcon />
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  // if (item.items) {
  //   return (
  //     <NavigationMenuItem key={item.title}>
  //       <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
  //       <NavigationMenuContent className="bg-popover text-popover-foreground">
  //         {item.items.map((subItem) => (
  //           <NavigationMenuLink asChild key={subItem.title} className="w-80">
  //             <SubMenuLink item={subItem} />
  //           </NavigationMenuLink>
  //         ))}
  //       </NavigationMenuContent>
  //     </NavigationMenuItem>
  //   );
  // }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="bg-transparent hover:bg-muted hover:text-accent-foreground group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-base font-medium transition-colors"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  // if (item.items) {
  //   return (
  //     <AccordionItem key={item.title} value={item.title} className="border-b-0">
  //       <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
  //         {item.title}
  //       </AccordionTrigger>
  //       <AccordionContent className="mt-2">
  //         {item.items.map((subItem) => (
  //           <SubMenuLink key={subItem.title} item={subItem} />
  //         ))}
  //       </AccordionContent>
  //     </AccordionItem>
  //   );
  // }

  return (
    <a key={item.title} href={item.url} className="text-base">
      {item.title}
    </a>
  );
};

// const SubMenuLink = ({ item }: { item: MenuItem }) => {
//   return (
//     <a
//       className="hover:bg-muted hover:text-accent-foreground flex min-w-80 select-none flex-row gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors"
//       href={item.url}
//     >
//       <div className="text-foreground">{item.icon}</div>
//       <div>
//         <div className="text-xl font-semibold">{item.title}</div>
//         {item.description && (
//           <p className="text-muted-foreground text-sm leading-snug">
//             {item.description}
//           </p>
//         )}
//       </div>
//     </a>
//   );
// };

export { Navbar1 };
