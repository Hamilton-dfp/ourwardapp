import Head from "next/head"
import Layout from "../components/layout/Layout"
import SectionHeader from "../components/headers/SectionHeader"
import HeroCard from "../components/cards/HeroCard"
import InfoCard, { IInfoCard } from "../components/cards/InfoCard"
import FaceCard, { IFaceCard } from "../components/cards/FaceCard"
import MiniCard, { IMiniCard } from "../components/cards/MiniCard"
import ImageCard, { IImageCard } from "../components/cards/ImageCard"
import { dataSundayMeeting, dataInfoCards, dataFaceCards, dataMiniCards, dataImageCards } from "../content/dataIndex"

function Home() {
  return (
    <Layout>
      <Head>
        <title>Maples 3rd Ward</title>
      </Head>
      <HeroCard {...dataSundayMeeting} />
      {dataInfoCards.filter((card) => !card.hidden).length > 0 && (
        <>
          <SectionHeader title="Announcements" subtitle="Find out more details of some of the upcoming events and activities." />
          {dataInfoCards
            .filter((card) => !card.hidden)
            .map((card: IInfoCard) => (
              <div key={card.title} className="pt-5">
                <InfoCard {...card} />
              </div>
            ))}
        </>
      )}
      {dataFaceCards.filter((card) => !card.hidden).length > 0 && (
        <>
          <SectionHeader title="Meet with a member of the bishopric" subtitle="Select a time and quickly schedule your appointment." />
          <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
            {dataFaceCards
              .filter((card) => !card.hidden)
              .map((card: IFaceCard) => (
                <div key={card.title} className="py-3 w-full">
                  <FaceCard {...card} />
                </div>
              ))}
          </div>
        </>
      )}
      {dataMiniCards.filter((card) => !card.hidden).length > 0 && (
        <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          {dataMiniCards
            .filter((card) => !card.hidden)
            .map((card: IMiniCard) => (
              <div key={card.title} className="py-3 w-full">
                <MiniCard {...card} />
              </div>
            ))}
        </div>
      )}
      {dataImageCards.filter((card) => !card.hidden).length > 0 && (
        <>
          <SectionHeader title="Learn what's going on" subtitle="Below are some of the happenings of the ward and ways to become involved." />
          <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 pt-5">
            {dataImageCards
              .filter((card) => !card.hidden)
              .map((card: IImageCard) => (
                <div key={card.title} className="py-3 w-full">
                  <ImageCard {...card} />
                </div>
              ))}
          </div>
        </>
      )}
    </Layout>
  )
}

export default Home
