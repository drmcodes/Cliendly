const BackgroundVideo = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover -z-1"
    >
      <source src="/src/assets/bg-cliendly.mp4" type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;
