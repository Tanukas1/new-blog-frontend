import React from "react";
import image from '../images/blog.png';
import '../stylesheets/home.css';
function Home (){
    return(
        <div>
        <div class="card bg-dark text-white" style={{maxwidth: '30rem'}}>
        <div class="card-img-top"><img src={image} className="img-fluid" /></div>
        <div class="card-img-overlay d-flex align-items-end">
        </div>
    </div>
        <div class="container-fluid ">
        <div class="row ">
        <div class="col-lg-8 col-md-11 col-11 mx-auto">
        <div class="row gy-5 ">
            <div class="col-12 card p-4 shadow blog_left__div">
                <div class="d-flex justify-content-center align-items-center flex-column pt-3 pb-5 ">
                    <h1 class="text-uppercase">Travel Blog</h1>
                    <p class="blog_title"> <span class="font-weight-bold"> Bara Imambara , </span> 5 september, 2021 </p>
                </div>
                <figure class="right_side_img mb-5">
                    <img src="https://www.fabhotels.com/blog/wp-content/uploads/2019/03/1000x650-4.jpg" class="img-fluid shadow"/>
                </figure>
                <p class="font-weight-bold">Counted among the top historical places in Lucknow, Bara Imambara aka Asafi Imambara is a historical monument that dates back to 1784. 
                Built by Asaf-ud-Daula, one of the renowned Nawabs of Awadh, the complex comprises a large mosque (Asfi Mosque), a labyrinth (the Bhul Bhulaiya), and a stepwell with running water (Shahi Baoli). 
                The structure boasts of two large gateways that will lead you to the central hall, which is touted to be the largest vaulted chamber in the world. 
                </p>
                <div class="d-flex justify-content-between left_div_btns">
                    <div>
                        <button class="left_div__like" id="like_btn"><i class="fa fa-thumbs-up"></i>Like</button>
                    </div> 
                </div>
               
            </div>
            <div class="col-12 card p-4 shadow blog_left__div">
                <div class="d-flex justify-content-center align-items-center flex-column pt-3 pb-5 ">
                    <h1 class="text-uppercase">Food Blog</h1>
                    <p class="blog_title"> <span class="font-weight-bold"> Basket Chaat , </span> 7 september, 2021 </p>
                </div>
                <figure class="right_side_img mb-5">
                    <img src="https://www.chhappanbhog.com/wp-content/uploads/2021/08/Basket-Chat.jpg" class="img-fluid shadow"/>
                </figure>
                <p class="font-weight-bold">For someone who is a fan of street food and chaat, it is something that you must not miss when in Lucknow. Also known as tokri or katori chaat, 
                this dish is truly delicious with flavours that will burst in your mouth in a single bite. Made of grated potatoes, the basket is deep-fried and then filled with matar, 
                tikki chutneys with a garnishing of pomegranate, sev and aromatic spices. Hazratganj, Royal Café serves the best Basket Chaat in Lucknow
                </p>
                <div class="d-flex justify-content-between left_div_btns">
                    <div>
                        <button class="left_div__like" id="like_btn"><i class="fa fa-thumbs-up"></i>Like</button>
                    </div> 
                </div>
            </div>
        </div>
        
        </div>
        
        <div class="col-lg-3 col-md-7 col-11  justify-content-end m-lg-0 m-auto ">
                                
                                <div class=" right_div_post">
                                    <div class="right_div__title py-4 pl-2 ">
                                        <h2>Inspiration</h2>
                                    </div>
                                    <div class="right_sub__div">
                                        <div class="row gx-3">
                                            <div class="col-6">
                                                <figure>
                                                    <img src="https://images.pexels.com/photos/196659/pexels-photo-196659.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" class="img-fluid shadow"/>
                                                </figure>
                                            </div>
                                            <div class="col-6">
                                                <figure>
                                                    <img src="https://images.pexels.com/photos/34140/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="img-fluid shadow"/>
                                                </figure>
                                            </div>
                                            <div class="col-6">
                                                <figure>
                                                    <img src="https://images.pexels.com/photos/38547/office-freelancer-computer-business-38547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="img-fluid shadow"/>
                                                </figure>
                                            </div>
                                            <div class="col-6">
                                                <figure>
                                                    <img src="https://i0.wp.com/createyourownreality.co/wp-content/uploads/2019/06/beverage-3157395_1920.jpg?fit=1024%2C614&ssl=1" class="img-fluid shadow"/>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class=" right_div_post">
                                    <div class="right_div__title py-4 pl-2 ">
                                        <h2>Follow Me</h2>
                                    </div>
                                    <div class="right_sub__div d-flex justify-content-around">
                                        <a href="#"> <i class="fab fa-facebook-square fa-3x"></i></a>
                                        <a href="#"> <i class="fab fa-3x fa-instagram"></i></a>
                                        <a href="https://github.com/"> <i class="fab fa-3x fa-github-square"></i> </a>
                                        <a href="#"> <i class="fab fa-3x fa-twitter-square"></i></a>
                                        <a href="#"> <i class="fab fa-3x fa-youtube-square"></i> </a>
                                        <a href="https://www.linkedin.com/in/tanu-kashyap-7b1a47219/"> <i class="fab fa-3x fa-linkedin"></i></a>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
           
    
    )
}
export default Home;