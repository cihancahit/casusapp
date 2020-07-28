import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import BuyMe from "../components/BuyMe";

import { withTranslation } from "../utils/i18n";
import Loading from "../components/Loading";
import Swal from "sweetalert2";
import { lockedMessage } from "../utils/misc";
import AddAppButton from "../components/AddAppButton";

const Home = ({ t, i18n, loading }) => {
	const router = useRouter();
	const [newGameLoading, setNewGameLoading] = useState(false);
	const onNewGame = async (e) => {
		e.preventDefault();
		setNewGameLoading(true);

		try {
			const res = await fetch(window.location.origin + "/new", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ name }),
			});

			if (res.status === 200) {
				const { gameCode } = await res.json();
				router.push("/" + gameCode);
			} else if (res.status === 423) {
				const { minutes } = await res.json();
				setNewGameLoading(false);

				Swal.fire(lockedMessage(minutes));
			} else {
				throw res.status + " " + res.statusText;
			}
		} catch (error) {
			console.error(error);
			Swal.fire(error);
			setNewGameLoading(false);
		}
	};

	const showSpyfallBack = i18n.language === "tr";

	return (
		<div className="main-menu">
			<div
				style={{
					position: "relative",
					margin: "1em auto 0",
					width: "fit-content",
				}}
			>
				<h3>{t("ui.welcome to spyfall")}</h3>
				
					<img className="spyfall-back" src="/m3works.png" alt="back" />
				
				
			</div>
			<hr />

			{(loading || newGameLoading) && <Loading />}
			{!loading && (
				<>
					<div className="button-container">
						<Link href="/join">
							<button id="btn-join-game" className="btn-large">
								{t("ui.join game")}
							</button>
						</Link>
						<button id="btn-new-game" onClick={onNewGame} className="btn-large">
							{t("ui.new game")}
						</button>
					</div>
					{/* <div className="button-container-vertical">
						<AddAppButton />
					
					</div> */}
				
				</>
			)}
		</div>
	);
};

export default withTranslation("common")(Home);
