export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container-luxury py-20">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-[var(--font-playfair)] text-3xl">
              Grano
            </h3>

            <p className="mt-4 text-white/60">
              Contemporary Calabrian dining
              in Dublin.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">
              Visit
            </h4>

            <p className="text-white/60">
              Stoneybatter
              <br />
              Dublin
              <br />
              Ireland
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">
              Contact
            </h4>

            <p className="text-white/60">
              hello@grano.ie
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-sm text-white/40">
          © 2025 Grano Dublin
        </div>
      </div>
    </footer>
  );
}