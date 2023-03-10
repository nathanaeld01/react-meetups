import Head from 'next/head';
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

function HomePage({ meetups }) {
    return (
        <>
            <Head>
                <title>React Meetups</title>
                <meta name="description" content="Browse a decent list of my favorite tourist spots" />
            </Head>
            <MeetupList meetups={meetups} />
        </>
    );
};

export async function getStaticProps() {
    const client = await MongoClient.connect('mongodb+srv://nathanaeld01:NvgtgTQHaBDbFHmk@cluster0.agkvnjd.mongodb.net/?retryWrites=true&w=majority');
    const db = client.db('meetups');

    const meetupsCollections = db.collection('meetups');
    const meetups = await meetupsCollections.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        revalidate: 10
    };
};

export default HomePage;