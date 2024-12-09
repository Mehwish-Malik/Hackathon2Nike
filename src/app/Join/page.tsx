import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/Assets/Logo.png";

export default function JoinUs() {
    return (
        <main>
            <section className="my-20">
                <div className="flex flex-col justify-center items-center max-w-lg mx-auto">
                    <Image src={Logo} alt="Nike Logo" width={65} height={35} />
                    <div className="items-center justify-center flex flex-col">
                        <h1 className="font-bold text-xl">BECOME A NIKE MEMBER</h1>
                    </div>
                    <div className="mt-10 mb-5 max-w-[280px] mx-auto">
                        <p className="text-[#8D8D8D] text-[12px] text-centre">
                            Create your Nike Member profile and get <br />first access to the very best of Nike <br /> products,
                            inspiration, and community.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 mt-3">
                        <input type="email" placeholder="Email" className="w-80 border p-2 rounded-sm" />
                        <input type="password" placeholder="Password" className="w-80 border p-2 rounded-sm" />
                        <input type="text" placeholder="First Name" className="w-80 border p-2 rounded-sm" />
                        <input type="text" placeholder="Last Name" className="w-80 border p-2 rounded-sm" />
                        <input type="text" placeholder="Date of Birth" className="w-80 border p-2 rounded-sm" />
                        <p className="text-[#8D8D8D] text-[12px]">
                            Get a Nike Member Reward every year on your Birthday.
                        </p>
                        <select className="w-80 border p-2 rounded-sm text-[#8D8D8D]">
                            <option value="Pakistan">Pakistan</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                            {/* Add more countries as needed */}
                        </select>
                        <div className="flex justify-between gap-x-4 w-80 mt-4">
                            <button className="w-36 h-10 bg-white border border-[#8D8D8D] text-[#8D8D8D] rounded-sm">
                                Male
                            </button>
                            <button className="w-36 h-10 bg-white border border-[#8D8D8D] text-[#8D8D8D] rounded-sm">
                                Female
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between max-w-[280px] mx-auto mt-6">
                        <label className="text-[#BCBCBC] text-[12px] flex items-center gap-1">
                            <input type="checkbox" />
                            Sign up for emails to get updates from Nike on products, offers, and your Member benefits.
                        </label>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-4">
                        <p className="text-[#BCBCBC] text-[12px]">
                            By creating an account, you agree to Nike&apos;s <u>Privacy Policy</u>.
                        </p>
                        <p className="text-[#BCBCBC] text-[12px]">and <u>Terms of Use</u>.</p>
                    </div>
                    <Link href="/joinus">
                        <button className="w-80 rounded-sm my-6 bg-black text-white py-2">JOIN US</button>
                    </Link>
                    <p className="text-[#BCBCBC] text-[12px]">
                        Already a Member?{" "}
                        <Link href="/Login">
                            <u className="text-black">Sign In</u>
                        </Link>
                    </p>
                </div>
            </section>
        </main>
    );
}
