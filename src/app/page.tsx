import unsplashBackground from "@/images/karl-pawlowicz-QUHuwyNgSA0-unsplash.jpg";

export default function Page() {
  return (
    <div className="md:grid md:grid-cols-12 w-screen h-screen">
      <div
        className="col-span-8 flex justify-center items-center"
        style={{
          backgroundImage: `url("${unsplashBackground.src}")`,
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-8xl font-bold text-white drop-shadow">
          Разработка сайтов
        </h1>
      </div>
      <div className="col-span-4 flex justify-center items-center bg-slate-50 shadow">
        <form action="/api/submit" method="POST">
          <div className="border border-neutral rounded shadow bg-neutral-50 p-3 w-full md:w-max">
            <h2 className="text-lg font-bold">Заказать разработку</h2>
            <div className="text-sm">От 180 000 руб.</div>
            <div className="mt-3">
              <input
                name="name"
                type="text"
                className="border border-neutral rounded w-full p-1"
                placeholder="Имя"
              />
            </div>
            <div className="mt-3">
              <input
                name="phone"
                type="text"
                className="border border-neutral rounded w-full p-1"
                placeholder="Номер телефона"
              />
            </div>
            <div className="mt-3">
              <input
                name="email"
                type="email"
                className="border border-neutral rounded w-full p-1"
                placeholder="Электронная почта"
              />
            </div>
            <div className="mt-3">
              <input
                name="budget"
                type="text"
                className="border border-neutral rounded w-full p-1"
                placeholder="Бюджет (руб.)"
              />
            </div>
            <div className="mt-3">
              <textarea
                name="about"
                className="border border-neutral rounded w-full p-1"
                placeholder="Расскажите о проекте"
                rows={4}
              />
            </div>
            <div>
              <button
                type="submit"
                className="border border-neutral rounded w-full bg-neutral-100 p-1"
              >
                Отправить
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
