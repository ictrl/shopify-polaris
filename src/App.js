import React, { useCallback, useState } from 'react';
import { Card, Tabs, Page, FooterHelp, Link } from '@shopify/polaris';

import './App.css';

import Setting from './components/Setting';
import Template from './components/Template';
import History from './components/History';

export default function TabsExample() {
	const [ selected, setSelected ] = useState(0);

	const handleTabChange = useCallback((selectedTabIndex) => setSelected(selectedTabIndex), []);

	const tabs = [
		{
			id: 'all-customers',
			content: 'Settings',
			accessibilityLabel: 'All customers',
			panelID: 'all-customers-content'
		},
		{
			id: 'accepts-marketing',
			content: 'Edit Template',
			panelID: 'accepts-marketing-content'
		},
		{
			id: 'repeat-customers',
			content: 'Buy More SMS',
			panelID: 'repeat-customers-content'
		}
	];

	const tabChangeHandler = (params) => {
		switch (tabs[selected].content) {
			case 'Settings':
				return <Setting />;

			case 'Edit Template':
				return <Template />;

			case 'Buy More SMS':
				return <History />;

			default:
				break;
		}
	};

	return (
		<Page>
			<Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
				<Card.Section>
					{tabChangeHandler()}

					{/* <Settings /> */}
				</Card.Section>
			</Tabs>
			<FooterHelp>
				Learn more about{' '}
				<Link url="https://adijha.com" external>
					Mojitolabs
				</Link>
			</FooterHelp>
		</Page>
	);
}
