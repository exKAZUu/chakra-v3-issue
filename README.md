# chakra-v3-issue

## Reproduction steps

1. `npm i`
2. `npm run dev`
3. Open http://localhost:3000
4. The following error is shown:
   ```
   React.Children.only expected to receive a single React element child.
   
   src/app/page.tsx (10:13) @ AdminPage
   
   
   8 |     return (
   9 |         <Breadcrumb.Root color="gray.600">
   > 10 |             <Breadcrumb.Link asChild>
   |             ^
   11 |                 <Link href="#" prefetch={false}>
   12 |                     aaaa
   13 |                 </Link>
   ```
5. If we remove `asChild` from `Breadcrumb.Link`, the error goes away.
