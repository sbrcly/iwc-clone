import classes from "./video.module.css"

export default function Video() {

    return (
        <video
            className={classes.video}
            muted
            autoPlay
            playsInline
            loop
            preload="none"
        >
            <source src="/hero.mp4" type="video/mp4" />
        </video>
    )
};
