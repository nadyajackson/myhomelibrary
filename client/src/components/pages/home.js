import Login from "./login"

export default function Home (){
    return(
        <div>
          <div>
            <h1>Welcome</h1>
            <p>My Home Library is a long-term project to help avid-readers and avid-organizers live their best lives.
                This current version allows you to record what books you own (my library) versus what you want to buy (wishlist) and what you just plan on reading (tbr).
                Future versions of this app will allow you to record what room your book is in, give books star ratings, add reviews, and other cool features. 
                If you have a feature to recommend pop over to the Contact page.
            </p>
          </div>
          <div>
            <h1>About the Programmer</h1>
            <p>N.B. Jackson grew in Alaska and now lives in Texas with her husband and fur children. The path into programming has been convelouted but this app is the realization of life long goal.</p>
          </div>
          <div>
            <Login />
          </div>
        </div>
    )
}