import { IModal } from "../shared/Interfaces"

const EventModal = ({ ...modal }: IModal) => {
  const { title, subtitle, image, button, buttonColor, href, date, time, location, details } = modal.data
  return (
    <>
      {image && (
        <div className="flex flex-shrink-0">
          <img className="h-24 w-full object-cover lg:h-32" src={image.src} alt={image.alt || ""} />
        </div>
      )}
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-2xl leading-6 font-semibold text-black">{title}</h3>
          {subtitle && <p className="mt-1 max-w-2xl text-md text-gray-500">{subtitle}</p>}
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            {date && (
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-md font-medium text-gray-500">Date</dt>
                <dd className="mt-1 text-md font-semibold text-gray-900 sm:mt-0 sm:col-span-2">{date}</dd>
              </div>
            )}
            {time && (
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-md font-medium text-gray-500">Time</dt>
                <dd className="mt-1 text-md font-semibold text-gray-900 sm:mt-0 sm:col-span-2">{time}</dd>
              </div>
            )}
            {location && (
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-md font-medium text-gray-500">Location</dt>
                <dd className="mt-1 text-md font-semibold text-gray-900 sm:mt-0 sm:col-span-2">{location}</dd>
              </div>
            )}
            {details && (
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-md font-medium text-gray-500">Details</dt>
                <dd className="mt-1 text-sm font-semibold text-gray-900 sm:mt-0 sm:col-span-2">{details}</dd>
              </div>
            )}
          </dl>
        </div>
      </div>
    </>
  )
}

export default EventModal