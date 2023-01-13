import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetailsPage({ meetupData }) {
    return (
        <>
            <Head>
                <title>{meetupData.title}</title>
                <meta name="description" content={meetupData.description} />
            </Head>
            <MeetupDetail
                image={meetupData.image}
                title={meetupData.title}
                address={meetupData.address}
                description={meetupData.description}
            />
        </>
    );
};

export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb+srv://nathanaeld01:NvgtgTQHaBDbFHmk@cluster0.agkvnjd.mongodb.net/?retryWrites=true&w=majority');
    const db = client.db('meetups');

    const meetupsCollections = db.collection('meetups');
    const meetups = await meetupsCollections.find({}, { _id: 1 }).toArray();

    client.close();

    return {
        fallback: false,
        paths: meetups.map(meetup => ({
            params: { meetupId: meetup._id.toString() }
        }))
    };
};

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect('mongodb+srv://nathanaeld01:NvgtgTQHaBDbFHmk@cluster0.agkvnjd.mongodb.net/?retryWrites=true&w=majority');
    const db = client.db('meetups');

    const meetupsCollections = db.collection('meetups');
    const currentMeetup = await meetupsCollections.findOne({ _id: ObjectId(meetupId) });

    return {
        props: {
            meetupData: {
                id: currentMeetup._id.toString(),
                title: currentMeetup.title,
                image: currentMeetup.image,
                address: currentMeetup.address,
                description: currentMeetup.description
            }
        }
    };
};

export default MeetupDetailsPage;