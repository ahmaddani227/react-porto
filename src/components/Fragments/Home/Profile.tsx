function Profile() {
  return (
    <div className="w-full lg:w-1/2">
      <h3 className="mb-4 text-lg">Hi all, I am</h3>
      <h1 className="mb-3 text-6xl font-normal">Ahmad Dani</h1>
      <h2 className="text-3xl text-mint-green lg:text-periwinkle-blue">
        &gt; Frontend Developer
      </h2>

      <div className="pt-16">
        <p className="mb-2 text-sm text-slate-muted">
          // complete the game to continue
        </p>
        <p className="mb-2 text-sm text-slate-muted">
          // you can also see it my Github page
        </p>
        <p className="text-sm font-medium">
          <span className="text-periwinkle-blue">const</span>{" "}
          <span className="text-mint-green">githubLink</span> ={" "}
          <a
            href="#"
            target="_blank"
            className="underline underline-offset-4 text-peach"
          >
            &quot;https://github.com/ahmaddani227&quot;
          </a>
        </p>
      </div>
    </div>
  );
}

export default Profile;
