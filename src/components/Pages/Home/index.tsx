import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import CollaboratorsList from "../../Templates/CollaboratorsList";
import { Link, Typography } from "@material-ui/core";

const Home: React.FC = () => {
	return (
		<>
			<Box bgcolor="primary.main">
				<Container maxWidth="md">
					<Box
						height="70vh"
						minHeight="700px"
						maxHeight="1000px"
						display="flex"
						alignItems="center"
					>
						<Box
							height="460px"
							width="100%"
							bgcolor="primary.contrastText"
							mt={-16}
						>
							<Box>
								<Typography variant="h5" color="textPrimary">
									<Link href="https://github.com/lucasAmarall/deliveryrator">
                    Link para o repo. deste projeto
									</Link>
								</Typography>
								<Typography variant="h5" color="textPrimary">
									<Link href="https://github.com/lucasAmarall/countriesList">
                    Projeto sem nenhuma lib para UI (recomendo dar um checke ;))
									</Link>
								</Typography>
								<Typography variant="h5" color="textPrimary">
									<Link href="https://github.com/lucasAmarall">Meu github</Link>
								</Typography>
							</Box>
							<iframe
								width="100%"
								height="400px"
								src="https://www.youtube.com/embed/nQW1vwq_D-w"
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
						</Box>
					</Box>
				</Container>
			</Box>

			<Box mt={-16} display="flex" mb={8} alignItems="center">
				<Container maxWidth="md">
					<Box
						height="400px"
						width="100%"
						bgcolor={"white"}
						borderRadius={16}
						boxShadow={16}
					>
						<CollaboratorsList />
					</Box>
				</Container>
			</Box>
		</>
	);
};

export default Home;
