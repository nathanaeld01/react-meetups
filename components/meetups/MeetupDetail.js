import classes from "./MeetupDetail.module.css";

function MeetupDetail(props) {
    return (
        <section className={classes.detail}>
            <div className={classes.image}>
                <img src={props.image} alt={title} />
            </div>
            <div className={classes.info}>
                <h1>{props.title}</h1>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
        </section>
    )
};

export default MeetupDetail;