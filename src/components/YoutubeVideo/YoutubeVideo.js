import './YoutubeVideo.css'

function YoutubeVideo() {
  return (
    <iframe width="560" height="315"
      src="https://www.youtube-nocookie.com/embed/WbWhpfXisZw"
      title="some"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  );
}

export default YoutubeVideo;