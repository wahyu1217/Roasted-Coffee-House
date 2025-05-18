import { CoffeeBorder } from '../../CoffeeBorder'

export const StayConnected = () => {
  return (
    <section className="text-[#5B1312] bg-[#f8f3ed] py-15 max-lg:px-8 px-2 text-center space-y-3">
      <p className="text-center text-4xl">Stay Connected</p>
      <CoffeeBorder />
      <p className="font-thin text-2xl leading-[146%] mt-12">
        Subscribe to out newsletters now and stay up to date with new collections and exclusive
        offers.
      </p>
      <div className="flex justify-center mt-20">
        <input
          type="email"
          placeholder="Enter your email address"
          className="border border-[#5B1312] rounded-tl-md rounded-bl-md  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5B1312] focus:border-transparent"
        />
        <button className="bg-[#5B1312] text-[#f8f3ed] rounded-tr-md px-1.5 py-0.5 rounded-br-md">
          Subscribe
        </button>
      </div>
    </section>
  )
}
