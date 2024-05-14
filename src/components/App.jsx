import { Product } from "./Product";
import { Mailbox } from "./Mailbox";
import {Card} from "./Card";
// import { BookList } from "./BookList";

export default function App() {
  return (
    <div>
{/* <Card text="Message as a text prop" /> */}
<Card>
	<h1>Card title</h1>
	<p>Text between opening and closing tag</p>
</Card>

      {/* <h1>Books of the week</h1>
      <BookList books={favouriteBooks} />

      <h1>Best selling</h1> */}
      
      {/* <div>
        {[1, 2, 3].map(item => {
          return <div>{item}</div>;
        })}
      </div> */}

      <Mailbox
      username="Sasha"
      messages="Моє повідомлення!!"
      />

      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
      <Product
        name="Tacos With Lime2 no foto"
        price={10.99}
      />
    </div>
  );
}
