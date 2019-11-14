import React, { useCallback, useRef, useState } from 'react';
import { Card, Layout, Heading } from '@shopify/polaris';

import Checkbox from './Checkbox';

import DefaultTextField from './DefaultTextField';

export default function Themes() {
	return (
		<div>
			<Layout>
				<Layout.AnnotatedSection
					title="Admin Phone No."
					description="Admin will be notify on this no. by selecting Notify Admin."
				>
					<Card sectioned>
						<div style={{ padding: '3rem' }}>
							<DefaultTextField label="Admin Phone No." type="text" maxLength="10" />
						</div>
					</Card>
				</Layout.AnnotatedSection>
				<Layout.AnnotatedSection
					title="Sender ID"
					description="Sender ID is the name or number which appears on the mobile phone as the sender of a SMS. Sender ID will be maximum of 6 Characters."
				>
					<Card sectioned>
						<div style={{ padding: '3rem' }}>
							<DefaultTextField elpText label="Sender ID" type="text" maxLength="6" />
						</div>
					</Card>
				</Layout.AnnotatedSection>
				<Layout.AnnotatedSection
					title="Notification Prefrence"
					description="Admin and Customer will be notified according to by selecting Notify Admin."
				>
					<Card sectioned>
						<div style={{ padding: '2rem' }}>
							<p style={{ fontSize: '17px' }}>Orders</p>
							<hr />

							<div style={{ display: 'flex' }}>
								<div style={{ marginRight: '1rem', width: '15rem' }}>
									<Heading>Create </Heading>
								</div>

								<div style={{ width: '15rem' }}>
									<Checkbox label="Notify Customer" hell="orders/create" />
								</div>
								<Checkbox label="Notify Admin" />
							</div>
							<div style={{ display: 'flex' }}>
								<div style={{ marginRight: '1rem', width: '15rem' }}>
									<Heading>Cancelled </Heading>
								</div>

								<div style={{ width: '15rem' }}>
									<Checkbox label="Notify Customer" />
								</div>
								<Checkbox label="Notify Admin" />
							</div>
							<div style={{ display: 'flex' }}>
								<div style={{ marginRight: '1rem', width: '15rem' }}>
									<Heading>Fulfilled </Heading>
								</div>

								<div style={{ width: '15rem' }}>
									<Checkbox label="Notify Customer" />
								</div>
								<Checkbox label="Notify Admin" />
							</div>
							<div style={{ display: 'flex' }}>
								<div style={{ marginRight: '1rem', width: '15rem' }}>
									<Heading>Partially Fulfilled </Heading>
								</div>

								<div style={{ width: '15rem' }}>
									<Checkbox label="Notify Customer" />
								</div>
								<Checkbox label="Notify Admin" />
							</div>
							<div style={{ display: 'flex' }}>
								<div style={{ marginRight: '1rem', width: '15rem' }}>
									<Heading>Paid </Heading>
								</div>

								<div style={{ width: '15rem' }}>
									<Checkbox label="Notify Customer" />
								</div>
								<Checkbox label="Notify Admin" />
							</div>

							<br />
							<p style={{ fontSize: '17px' }}>Customers Account</p>
							<hr />

							<div style={{ display: 'flex' }}>
								<div style={{ marginRight: '1rem', width: '15rem' }}>
									<Heading>Create </Heading>
								</div>

								<div style={{ width: '15rem' }}>
									<Checkbox label="Notify Customer" />
								</div>
								<Checkbox label="Notify Admin" />
							</div>
							<br />
							<p style={{ fontSize: '17px' }}>Refund</p>
							<hr />

							<div style={{ display: 'flex' }}>
								<div style={{ marginRight: '1rem', width: '15rem' }}>
									<Heading>Create </Heading>
								</div>

								<div style={{ width: '15rem' }}>
									<Checkbox label="Notify Customer" />
								</div>
								<Checkbox label="Notify Admin" />
							</div>
						</div>
					</Card>
				</Layout.AnnotatedSection>
			</Layout>
		</div>
	);
}
