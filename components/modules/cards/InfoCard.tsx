import PrimaryButton from "../../elements/buttons/PrimaryButton"
import Icon from "../../elements/icons/Icon"
import { getDateDisplay } from "../../../shared/utils/date.util"
import { IButton, IImage } from "../../../shared/types"

export type IInfoCard = {
  title: string
  date?: Date
  image?: IImage
  button?: IButton
  hidden?: boolean
}

const InfoCard = ({ ...card }: IInfoCard) => {
  const dateDisplay = getDateDisplay(card.date, 7)
  return (
    <PrimaryButton
      type="pass-thru"
      link={card.button.link}
      modal={card.button.modal}
      className="relative rounded-lg shadow-xl bg-white px-4 py-5 flex text-left items-center space-x-3"
    >
      <div className="flex-shrink-0">
        <img className="h-16 w-16 rounded-full border border-gray-400" src={card.image?.src || "https://via.placeholder.com/382"} alt={card.image?.alt || ""} />
      </div>
      <div className="flex-1 min-w-0">
        <a href="#" className="focus:outline-none">
          <span className="absolute inset-0" aria-hidden="true"></span>
          <p className="text-black font-semibold text-md md:text-lg pb-1 truncate" title={card.title}>
            {card.title}
          </p>
          {card.date && (
            <div className="text-sm md:text-md text-gray-600 flex flex-wrap leading-6">
              <div className="pr-2 flex items-center">
                <Icon name="calendar" className="h-4 w-4 mr-2 mb-0.5 text-gray-400" />
                <time dateTime={dateDisplay.isoString}>{dateDisplay.dateDisplay}</time>
              </div>
              <div className="pr-2 flex items-center">
                <Icon name="clock" className="h-4 w-4 mr-2 mb-0.5 text-gray-400" />
                <time dateTime={dateDisplay.isoString}>{dateDisplay.timeDisplay}</time>
                <span
                  className={`inline-flex items-center ml-2 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    dateDisplay.isWithin ? "bg-green-100 text-green-800" : "bg-primary-100 text-primary-800"
                  }`}
                >
                  {dateDisplay.relativeDisplay}
                </span>
              </div>
            </div>
          )}
        </a>
      </div>
      <div className="flex-shrink-0 pr-2">
        <div className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 bg-transparent hover:text-gray-500">
          <span className="sr-only">Open options</span>
          <Icon name="chevron-right" className="w-5 h-5" />
        </div>
      </div>
    </PrimaryButton>
  )
}

export default InfoCard
