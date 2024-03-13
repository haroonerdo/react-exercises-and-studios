export default function BookList() {
   let pageTitle = "My Favorite Books";
   let book1 = "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781649374042_p0_v9%5D&call=url%5Bfile:common/decodeProduct.chain%5D";
   let book2 = "https://prodimage.images-bn.com/pimages/9781250301703_p0_v5_s192x300.jpg";
   let book3 = "https://cdn.kobo.com/book-images/24463cb4-28ad-48cb-807f-158cf6d11a92/353/569/90/False/atomic-habits-tiny-changes-remarkable-results.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img style ={{height: "500px"}} src={book1} alt="Forth Wing by Rebecca Yarros" />
         <img style ={{height: "500px"}} src={book2} alt="The Silent Patient by Alex Michselides" />
         <img style ={{height: "500px"}} src={book3} alt="Atomic Habits by James Clear" />
      </div>      
   );
}
