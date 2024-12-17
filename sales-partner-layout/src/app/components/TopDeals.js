import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';
import DealCard from './DealCard';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const TopDeals = () => {
	const [showDeals, setShowDeals] = useState(true);

	const toggleDeals = () => {
		setShowDeals(!showDeals);
	};

	return (
		<div>
			<Button onClick={toggleDeals} sx={{ mt: 4, textTransform: 'none', color: 'inherit' }}>
				<Typography variant="h6">
					Top deals this quarter {showDeals ? <ExpandLessIcon /> : <ExpandMoreIcon />}
				</Typography>
			</Button>

			<Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, flexDirection: 'row', visibility: showDeals ? 'visible' : 'hidden', height: showDeals ? 'auto' : 0 }}>
				<DealCard title="SIM" deals={10} revenue="$1M" industry="Banking" />
				<DealCard title="ERP" deals={7} revenue="$500K" industry="Industrial" />
				<DealCard title="AI POCS" deals={7} revenue="$500K" industry="Industrial" />
			</Box>
		</div>
	);
};

export default TopDeals;