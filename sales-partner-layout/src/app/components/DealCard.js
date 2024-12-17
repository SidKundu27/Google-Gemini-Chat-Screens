import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const DealCard = ({ title, deals, revenue, industry }) => {
	return (
		<Card sx={{ minWidth: 275, backgroundColor: '#f0f0f0', marginRight: 2 }}>
			<CardContent>
				<Typography variant="h6" align="center">{title}</Typography>
				<Box display="flex" justifyContent="space-between">
					<Box sx={{ width: '25%', backgroundColor: '#f7f7f7', p: 2, borderRadius: 1, textAlign: 'center' }}>
						<Typography>Deals</Typography>
						<Typography>{deals}</Typography>
					</Box>
					<Box sx={{ width: '25%', backgroundColor: '#f7f7f7', p: 2, borderRadius: 1, textAlign: 'center' }}>
						<Typography>Revenue</Typography>
						<Typography>{revenue}</Typography>
					</Box>
				</Box>
			</CardContent>
			<Box sx={{ p: 2 }}>
				<Button variant="contained" fullWidth>{industry}</Button>
			</Box>
		</Card>
	);
};

export default DealCard;