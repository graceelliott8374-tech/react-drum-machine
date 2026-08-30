function DrumPad({ sound, onPlay }) {
  const padId = sound.name.toLowerCase().replace(/\s+/g, "-");

  return (
    <button
      type="button"
      className="drum-pad"
      id={padId}
      aria-label={`${sound.key}: ${sound.name}`}
      onClick={() => onPlay(sound)}
    >
      <span className="drum-pad__key">{sound.key}</span>
      <span className="drum-pad__name">{sound.name}</span>

      <audio className="clip" id={sound.key} src={sound.src} preload="auto" />
    </button>
  );
}

export default DrumPad;
