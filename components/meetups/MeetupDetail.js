import classes from "./MeetupDetail.module.css";

function MeetupDetail({ image, title, address, description }) {
    return (
        <section className={classes.detail}>
            <div className={classes.image}>
                <img src={image} alt={title} />
            </div>
            <div className={classes.info}>
                <h1>{title}</h1>
                <address>{address}</address>
                <p>{description}</p>
            </div>
        </section>
    )
};

export default MeetupDetail;