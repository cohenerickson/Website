export default function NavbarButton (props) {
  return (
    <a href={props.href} class="mx-2 NavbarButton">
      <div class="bg-background mb-0.5">
        <span class="text-primary font-black">{props.children}</span>
      </div>
    </a>
  );
  // return (
  //   <div class="bg-gradient-to-r from-accent to-accent2 mx-2 hover:from-primary hover:to-primary">
  //     <div class="bg-background mb-0.5">
  //       <a href={props.href} class="text-primary font-black">{props.children}</a>
  //     </div>
  //   </div>
  // );
}
