export default function Ads() {
  return (
    <div className="container mx-auto p-6 md:p-1">
      <h2 className="text-3xl font-bold pt-20 pb-2 text-center">
        Our Services
      </h2>
      <p className="text-center pb-8">
        Create your Amazing Cv from us. Contact us via WhatsApp - 071 098 5154
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="m-5 hover:scale-105 transition-all">
          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02CdvqiJwaVmFuhndXqhQSF4DRxfWWG2XgmYARP4GsgCoiokV8jMacwsggJJBQs4tWl%26id%3D61556561968928&show_text=true&width=500"
            style={{ border: "none", overflow: "hidden" }}
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="m-5 hover:scale-105 transition-all">
          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02hV8ufPEe3fyaaUiBn434WeyrPyWX5LQA2zEjGWmCaEEWPcG79xB2HExjugk95DZol%26id%3D61556561968928&show_text=true&width=500"
            style={{ border: "none", overflow: "hidden" }}
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
