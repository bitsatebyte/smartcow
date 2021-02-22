import './YoutubeVideo.css'

function YoutubeVideo() {
  return (
    <div className="youtubeVideo">
      <iframe width="300" height="150"
        src="https://www.youtube-nocookie.com/embed/WbWhpfXisZw"
        title="some"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe>
    </div>
  );
}

export default YoutubeVideo;