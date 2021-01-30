import React from "react";
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    LinkedinShareButton,
    LinkedinIcon
} from "react-share"

function Footer(){
    return(
        <div className="footer">
            <div className="container">
                <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="d-flex">
                        <p>The footer</p>
                    </div>
                    <div className="d-flex">
                        <a href="phone">64 22 096 3980</a>
                    </div>
                    <div className="d-flex">
                        <p>Email: alexhuo12@gmail.com</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-2 col-sm-6">
                    <div className="row">
                        <div className="col">
                            <a className="footer-nav">Home</a>
                            <br/>
                            <a className="footer-nav">About me</a>

                        </div>
                        <div className="col">
                            <a className="footer-nav">Experience</a>
                            <br/>
                            <a className="footer-nav">Portfolio</a>
                            <br/>
                            <a className="footer-nav">Contacts</a>
                        </div>
                    </div>
                </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                            url={"https://www.facebook.com/"}>
                                <FacebookIcon className="mx-3" size={36} />
                            </FacebookShareButton>
                            <TwitterShareButton
                                url={"https://twitter.com/"}>
                                <TwitterIcon className="mx-3" size={36} />
                            </TwitterShareButton>
                            <LinkedinShareButton
                                url={"https://nz.linkedin.com/"}>
                                <LinkedinIcon className="mx-3" size={36} />
                            </LinkedinShareButton>
                            <RedditShareButton
                                url={"https://www.reddit.com/"}>
                                <RedditIcon className="mx-3" size={36} />
                            </RedditShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;All Rights Reserved
                        </p>
                    </div>
            </div>
        </div>
        </div>
    )
}

export default Footer