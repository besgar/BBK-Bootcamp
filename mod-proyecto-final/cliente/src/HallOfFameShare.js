function HallOfFameShare(){

    return(
        <>
            {/* <div class="container-fluid p-5 text-center"> */}    
            <div className="compartirRS_HallOfFame">
                <div className="compartirRS_HallOfFame_p">
                    <p>¡Comparte tu Hall of Fame!  <i class="fa fa-share-alt fa-1x"></i></p>
                </div>
            
                <div className="compartirRS_HallOfFame_RS"> 
                    <div class="container-fluid text-right">
                        {/* <p class="mb-1"><i class="fa fa-share-alt"></i> ¡Comparte tu Hall of Fame!</p> */}
                        <a href="https://www.facebook.com/sharer/sharer.php?u=http://localhost:3000/halloffame/public/elenabestilleiro@gmail.com" target="_blank">
                        <button class="btn-info btn-circle btn-circle-sm m-1"><i class="fa fa-facebook-f"></i></button>
                        </a>
                        <a href="http://twitter.com/share?text=Este es mi Hall Of Fame&url=http://localhost:3000/halloffame/public/elenabestilleiro@gmail.com&hashtags=deserveU,halloffame" target="_blank">
                        <button class="btn-primary btn-circle btn-circle-sm m-1"><i class="fa fa-twitter"></i></button>
                        </a>
                        <a href="https://www.instagram.com/sharer.php?u=http://localhost:3000/halloffame/public/elenabestilleiro@gmail.com" target="_blank">
                        <button class="btn-danger btn-circle btn-circle-sm m-1"><i class="fa fa-instagram"></i></button>
                        </a>
                        <a href="whatsapp://send?text=Este es mi Hall OF Fame: http://localhost:3000/halloffame/public/elenabestilleiro@gmail.com" target="_blank">
                        <button class=" btn-success  btn-circle btn-circle-sm m-1"><i class="fa fa-whatsapp"></i></button>
                        </a>
                    </div>
                </div>
            </div>         
        </>
    );
}

export default HallOfFameShare;



                {/* <div class="container-fluid p-5 text-center"> */}
                // <div class="container-fluid text-right">
                {/* <div class="row mb-5">
                    <div class="col-lg-5 mx-auto">
                        <h1 class="font-weight-bold">Circle Buttons</h1>
                        <p class="text-muted">Create your own circle buttons with icons in Bootstrap&nbsp;4. <a href="https://bootstrapious.com/snippets" class="text-muted">Bootstrap snippet by Bootstrapious</a></p>
                    </div>
                </div> */}

             {/* <div class="row align-items-stretch">
                <div>
                    <div class="p-2 rounded h-100">
                    <p class="mb-1"><i class="fa fa-share-alt"></i> ¡Comparte tu Hall of Fame!</p>
                        <button class="btn-info btn-circle btn-circle-sm m-1"><i class="fa fa-facebook-f"></i></button>
                        <button class="btn-primary btn-circle btn-circle-sm m-1"><i class="fa fa-twitter"></i></button>
                        <button class="btn-danger btn-circle btn-circle-sm m-1"><i class="fa fa-instagram"></i></button>
                        <button class=" btn-success  btn-circle btn-circle-sm m-1"><i class="fa fa-whatsapp"></i></button>
                        <button class="btn-dark btn-circle btn-circle-sm m-1"><i class="fa fa-envelope-o"></i></button>
                    </div>
                </div>
            </div>
        </div> */}